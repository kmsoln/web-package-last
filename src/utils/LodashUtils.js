import _ from 'lodash';

class LodashUtils {
    // Method to capitalize all post titles
    static capitalizeTitles(posts) {
        return posts.map(post => ({
            ...post,
            title: _.startCase(post.title) // Capitalize each word in title
        }));
    }

    // Method to filter unique posts by title length
    static uniquePostsByTitleLength(posts) {
        return _.uniqBy(posts, post => post.title.length);
    }

    // Method to truncate post bodies to a certain length
    static truncatePostBodies(posts, length = 50) {
        return posts.map(post => ({
            ...post,
            body: _.truncate(post.body, { length })
        }));
    }
}

export default LodashUtils;

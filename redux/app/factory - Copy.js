import ApiOperation from './../../adapter/ApiOperation';
import ApiConstants from './../../adapter/ApiConstants';

const factories = {
    getNovelListHome: (payload) => {
        return ApiOperation.request({
            url: ApiConstants.HOME,
            method: 'GET',
        });
    },
    getReadingNovelList: (id) => {
        return ApiOperation.request({
            url: `${ApiConstants.READING_HISTORY_ACC}/${id}`,
            method: 'GET',
        });
    },
    getNovelInfo: (id) => {
        return ApiOperation.request({
            url: `${ApiConstants.HOME}/${id}`,
            method: 'GET',
        });
    },
    getNovelChapterInfo: (id) => {
        return ApiOperation.request({
            url: `${ApiConstants.CHAPTER_NOVEL}/${id}`,
            method: 'GET',
        });
    },
    addBookmark: (data) => {
        return ApiOperation.request({
            url: `${ApiConstants.BOOKMARK}`,
            method: 'POST',
            data: data
        });
    },
}
export default factories;

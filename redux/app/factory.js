import ApiConstants from "../../adapter/ApiConstants";
import ApiOperation from "../../adapter/ApiOperation";

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
  saveReadingNovel: (saveReadingNovel) => {
    return ApiOperation.request({
      url: `${ApiConstants.HISTORY}`,
      method: 'POST',
      data: saveReadingNovel
    });
  },
  addBookmark: (data) => {
    return ApiOperation.request({
      url: `${ApiConstants.BOOKMARK}`,
      method: 'POST',
      data: data
    });
  },
  changeUserName: (id, userName, email) => {
    return ApiOperation.request({
      url: `${ApiConstants.ACCOUNT}/${id}/update-username-email`,
      method: 'PATCH',
      data: {
        username: userName,
        email: email
      }
    });
  },
  addChapter: data => {
    return ApiOperation.request({
      url: `${ApiConstants.CHAPTER_NOVEL}`,
      method: 'POST',
      data: data
    });
  },
  getListReadCount: (payload) => {
    return ApiOperation.request({
      url: `https://ebook-f995.onrender.com/api/ranking/read-rank`,
      method: 'GET',
    });
  },
  getListRateCount: (payload) => {
    return ApiOperation.request({
      url: `https://ebook-f995.onrender.com/api/ranking/score-rank`,
      method: 'GET',
    });
  },
  addComment: (data) => {
    return ApiOperation.request({
      url: `https://ebook-f995.onrender.com/api/comments`,
      method: 'POST',
      data: data,
    });
  },
  getBookmarks: (accountId, keyword) => {
    return ApiOperation.request({
      url: `${ApiConstants.BOOKMARK}/${accountId}`,
      method: "GET",
      params: { keyword: keyword },
    });
  },
  deleteBookmarks: (accountId, novelId) => {
    return ApiOperation.request({
      url: `${ApiConstants.BOOKMARK}/${accountId}/${novelId}`,
      method: "DELETE",
    });
  },
  postBookmark: (accountId, novelId) => {
    return ApiOperation.request({
      url: `${ApiConstants.BOOKMARK}/${accountId}/${novelId}`,
      method: "POST",
    });
  },
}
export default factories;

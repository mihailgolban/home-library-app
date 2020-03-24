import axios from "axios";

class Api {
    static client;

    static initialize() {
        Api.client = axios.create({
            baseURL: 'https://books.templatedream.net/api'
        })
    }

    static getBooks(subject, parameters = {}) {
        return Api.client.get('/getBooks', {
            params: parameters
        })
    }

    static getBookById(bookId) {
        return Api.client.get('/getBookInformation', {
            params: {
                bibkeys: `OLID:${bookId}`,
            }
        })
    }

    static searchBook(title) {
        return Api.client.get('/searchBook', {
            params: {
                title,
                limit: 21
            }
        })
    }
}

export default Api;

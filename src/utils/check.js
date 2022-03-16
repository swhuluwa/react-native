import storage from './storage';

/**
 * @Description: 本地缓存处理
 */
export async function get(key, callback) {
    await storage
        .load({key})
        .then(async data => {
            await callback(data);
        })
        .catch(async err => {
            // any exception including data not found
            // goes to catch()
            console.warn(err.message);
            switch (err.name) {
                case 'NotFoundError':
                    // TODO;
                    break;
                case 'ExpiredError':
                    // TODO
                    break;
                default:
                    break;
            }
            await callback(null);
        });
}

export function save(key, data) {
    storage.save({key, data});
}

export function clear(key) {
    storage.save({key, data: null});
}

/**
 * @function: 判断应用是否登录
*/
export function judgeLogin(loginedCallback, noLoginCallback) {
    get('loginToken', str => {
        if (str) {
            loginedCallback();
        } else {
            noLoginCallback();
        }
    });
}
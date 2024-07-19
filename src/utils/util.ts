
import { imageConfig } from '../config/config';
import zhJson from '../i18n/locales/zh.json'

export const format00Time = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    const formattedHours = hours.toString().padStart(2, '0');
    const formattedMinutes = minutes.toString().padStart(2, '0');
    const formattedSeconds = secs.toString().padStart(2, '0');
    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}

export const convertToSeconds = (input) => {
    if(!input){
        return 0;
    }
    // 解析输入的字符串
    const match = input.match(/^(\d+)([a-zA-Z]+)$/);
    if (!match) {
        return 0;
    }
    const value = parseInt(match[1]);
    const unit = match[2];
    // 将不同单位转换为秒
    switch (unit.toLowerCase()) {
        case "s":
            return value;
        case "m":
            return value * 60;
        case "h":
            return value * 3600;
        case "day":
            return value * 86400;
        case "week":
            return value * 604800;
        case "mon":
            return value * 2592000; // 这里假设1个月是30天
        case "year":
            return value * 31536000; // 这里假设1年是365天
        default:
            return 0;
    }
}
export const convertTimestampToDateTime = (timestamp) => {
    // 创建一个新的Date对象，将时间戳作为参数传递
    var date = new Date(timestamp);

    // 获取年、月、日、时、分、秒
    var year = date.getFullYear();
    var month = addZero(date.getMonth() + 1); // 月份是从0开始的，所以要加1
    var day = addZero(date.getDate());
    var hours = addZero(date.getHours());
    var minutes = addZero(date.getMinutes());
    var seconds = addZero(date.getSeconds());

    // 格式化后的时间字符串
    var formattedDateTime = year + '-' + month + '-' + day + ' ' + hours + ':' + minutes + ':' + seconds;

    return formattedDateTime;
}

// 辅助函数，用于确保单个数字有两位数
function addZero(num) {
    return num < 10 ? '0' + num : num;
}
//  const { t: translate } = useTranslation();
//  {translate(getText("地址管理"))}
//内存
const paths = {}
//json中  找位置
export function getText(targetValue) {
    if (paths[targetValue]) {
        return paths[targetValue];
    }
    const obj = zhJson;
    let path = targetValue;
    //一
    for (const key1 in obj) {
        const level1 = obj[key1];
        if (level1 === targetValue) {
            path = key1;
        }
        //二
        if (typeof level1 === 'object') {
            for (const key2 in level1) {
                const level2 = level1[key2];
                if (level2 === targetValue) {
                    path = key1 + "." + key2;
                }
                //三
                if (typeof level2 === 'object') {
                    for (const key3 in level2) {
                        const level3 = level2[key3];
                        if (level3 === targetValue) {
                            path = key1 + "." + key2 + "." + key3;
                        }
                        if (typeof level3 === 'object') {
                            for (const key4 in level3) {
                                const level5 = level3[key4];
                                if (level5 === targetValue) {
                                    path = key1 + "." + key2 + "." + key3 + "." + key4;
                                }
                            }
                        }
                        if (Array.isArray(level3)) {
                            for (let i = 0; i < level3.length; i++) {
                                if (level3[i] === targetValue) {
                                    path = key1 + "." + key2 + "." + key3 + "." + i
                                }
                                if (typeof level3[i] === 'object') {
                                    for (const key in level3[i]) {
                                        const level = level3[i][key];
                                        if (level === targetValue) {
                                            path = key1 + "." + key2 + "." + key3 + "." + i + "." + key;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                if (Array.isArray(level2)) {
                    for (let i = 0; i < level2.length; i++) {
                        if (level2[i] === targetValue) {
                            path = key1 + "." + key2 + "." + i
                        }
                    }
                }
            }
        }
        if (Array.isArray(level1)) {
            for (let i = 0; i < level1.length; i++) {
                if (level1[i] === targetValue) {
                    path = key1 + "." + i
                }
            }
        }
    }
    if (path !== '') {
        paths[targetValue] = path;
    }
    return path;
}

//全局修改公司信息
export function changeCompanyData(companyData) {
    //标签
    document.getElementsByTagName("title")[0].innerText = companyData?.companyName;
    // icon
    for (let index = 0; index <= 4; index++) {
        let favicon = document.getElementById("favicon" + index) as HTMLLinkElement;
        favicon.href = imageConfig.baseImageUrl + companyData?.companyLogo;
    }

    //颜色
    const colors = ['#2b9bc0', '#0ead98', '#f0b90a'];
    document
        .getElementsByTagName("body")[0]
        .style.setProperty("--boutton-background-color", colors[companyData?.companySkin - 1]);
}


//修改主题
export function changeThem(type) {
    const colors = ['#0f1720', '#fff'];
    //改黑色
    if (type == "dark") {
        localStorage.setItem("them", "dark");
        document
            .getElementsByTagName("body")[0]
            .style.setProperty("--them-background", colors[0]);
        document
            .getElementsByTagName("body")[0]
            .style.setProperty("--them-color", colors[1]);
    } else {
        localStorage.setItem("them", "light");
        document
            .getElementsByTagName("body")[0]
            .style.setProperty("--them-background", colors[1]);
        document
            .getElementsByTagName("body")[0]
            .style.setProperty("--them-color", colors[0]);
    }
}

//判断主题
export function isDark() {
    return localStorage.getItem("them") == "dark";
}

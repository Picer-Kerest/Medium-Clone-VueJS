// Если мы получаем что-то из local storage, то это всегда JSON-объект
// Его преобразуем в js объект
// Здесь нужен return, потому что это функция, которая в целом возвращает значение
export const getItem = key => {
    try {
        return JSON.parse(localStorage.getItem(key))
    } catch (e) {
        console.error('Error in getting data from localStorage', e)
        return null
    }
}


// JSON.stringify потому что данные хранятся в JSON, поэтому их нужно конвертировать в JSON
// return не нужен, потому что мы либо сохраняем, либо выбрасываем исключение
// Исключение мы обработали
export const setItem = (key, data) => {
    try {
        localStorage.setItem(key, JSON.stringify(data))
    } catch (e) {
        console.error('Error in saving data in localStorage', e)
    }
}

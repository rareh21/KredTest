export const comment = (data) => {
    return {
        type: "Commented",
        payload: data
    };
};

export const name = (data) => {
    return {
        type: "name",
        payload: data
    };
};

export const screen = (poster, name, year) => {
    return {
        type: "screen",
        payload: {
            poster: poster,
            name: name,
            year: year
        }
    };
};

// export const data = (name, comment) => {
//     return{
//         type: "Data",
//         payload: {
//             name: name,
//             comment: comment
//         }
//     };
// }
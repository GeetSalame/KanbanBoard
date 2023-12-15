const API_url = "https://api.quicksell.co/v1/internal/frontend-assignment";

const fetchData = () => {
    fetch(API_url)
        .then((res) => {
            return res.json();
        }).then((data) => {
            console.log(data)
            return data;
        })
}

export const kanbanData = fetchData();
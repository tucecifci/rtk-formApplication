import { createSlice } from "@reduxjs/toolkit";


export const formSlice = createSlice({
    name: "form", //Slice'a bir ad verdik, böylece storeda state erişmek için kullanıcaz
    initialState: { // state'in başlangıç durumu
        name: "",
        password: "",
        isLoggedIn: false,
    }, 
    reducers: {
        updateForm: (state, action) => { //bir form alanını günceller
            const {field, value} = action.payload; //actiondan field ve value bilgilerini al. Reducer, bir action alır. Bu action objesi genellikle iki bilgi taşır. 1)type: hangi actionın çalıştığını belirtir. 2)payload: reducer'ın ihtiyaç duyduğu ek verilerdir. field:"name", value:"tuce" gibi. yani field güncellenecek alan, value ise yeni değerdir.
            state[field] = value; //statedeki ilgili alanı güncelle

        },
        resetForm: (state) => { //formu sıfırlar
            state.name = "";
            state.password = "";
        },
        setLoggedIn: (state, action) => {
            state.isLoggedIn = action.payload;
        },
        logOut: (state) =>{
            state.isLoggedIn = false;
            state.name = "";
            state.password = "";
        }
    }
})

export const {updateForm, resetForm, setLoggedIn, logOut} = formSlice.actions
export default formSlice.reducer
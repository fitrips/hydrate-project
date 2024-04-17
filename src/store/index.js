import { createStore } from "vuex";
import auth from "./modules/auth";
import artikel from "./modules/artikel";

const store = createStore({
    state: {
        isLoading: false,
    },
    modules: {
        auth,
        artikel,
    },
});

export default store;
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Contact, About } from "./Gravit/Pages";
import Layout from "./Gravit/Layouts/Layout";
import store from "./Gravit/Utils/store";
import { Provider } from "react-redux";

const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <Layout>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </Layout>
            </Router>
        </Provider>
    );
};

export default App;

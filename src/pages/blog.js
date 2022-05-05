import React from "react";
import Layout from "../components/layout";
import MyComponent from "../components/component";
import Header from "../components/header";


const BlogPage = () => {
    return (
        <Layout pageTitle="My Blog Posts">
            <h1>This is My first Blog Component Created in Life!</h1>
            <MyComponent />
            <Header />
        </Layout>
    )
}

export default BlogPage
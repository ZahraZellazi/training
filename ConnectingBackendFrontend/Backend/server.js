const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
app.use(express.json());

mongoose.connect("mongodb+srv://zahra:zahra030702@cluster0.e6d8kvo.mongodb.net/blogs?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const Blog = mongoose.model("Blog", { title: String, text: String, imgUrl: String });

app.use(cors({
    origin: "*"
}));

app.get('/blogs', async (req, res) => {
    try {
        const blogs = await Blog.find();
        res.status(200).send(blogs);
    } catch (error) {
        res.status(500).send({ error: "Failed to fetch blogs" });
    }
});

app.post('/blogs', async (req, res) => {
    const { title, text, imgUrl } = req.body;
    try {
        await Blog.create({ title, text, imgUrl });
        res.status(201).send({ msg: "Blog created successfully" });
    } catch (error) {
        res.status(500).send({ error: "Failed to create blog" });
    }
});

app.put('/blogs/:_id', async (req, res) => {
    const { _id } = req.params;
    const { title, text, imgUrl } = req.body;
    try {
        const updatedBlog = await Blog.findByIdAndUpdate(_id, { title, text, imgUrl }, { new: true });
        if (!updatedBlog) {
            return res.status(404).send({ error: "Blog not found" });
        }
        res.status(200).send(updatedBlog);
    } catch (error) {
        res.status(500).send({ error: "Failed to update blog" });
    }
});

app.delete('/blogs/:_id', async (req, res) => {
    const { _id } = req.params;
    try {
        const deletedBlog = await Blog.deleteOne({ _id });
        if (deletedBlog.deletedCount === 0) {
            return res.status(404).send({ error: "Blog not found" });
        }
        res.status(200).send({ msg: "Blog deleted successfully" });
    } catch (error) {
        res.status(500).send({ error: "Failed to delete blog" });
    }
});

app.listen(3737, () => console.log("Server is running on port 3737"));

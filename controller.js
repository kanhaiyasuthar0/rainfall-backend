const Blogs = require("./model");
const Rain = require("./rainfallModel");
const StrangeTable = require("./StrengthModel");

//search data with author
const all = () => {
    return async (req, res) => {

        let all = await Blogs.find({}).lean().exec();
        // let filtered = all.filter((ele) => ele.author == req.body.author);

        res.send(all);
    };
};
//get strange table
const getStrangeTable = () => {
    return async (req, res) => {
        let all = await StrangeTable.find({}).lean().exec();
        res.send(all);
    };
};
//get strange table
const postStrangeTable = () => {
    console.log("posting")
    return async (req, res) => {
        let all = await StrangeTable.insertMany([req.body])
        res.send(all);
    };
};
const rainAll = () => {
    return async (req, res) => {
        let all = await Rain.find({}).lean().exec();
        // let filtered = all.filter((ele) => ele.author == req.body.author);
        res.send(all);
    };
};


// add new blog to bakcend
const post = () => {
    // console.log("trigg")
    return async (req, res) => {
        console.log(req.body)
        let response = await Blogs.insertMany([req.body]);
        console.log(response);
        res.send(response);
    };
};
const newRain = () => {
    console.log("trigg")
    return async (req, res) => {
        console.log(req.body)
        let response = await Rain.insertMany([req.body]);
        console.log(response);
        res.send(response);
    };
};
const updateRainData = () => {

    return async (request, res) => {
        // console.log(req.body)
        //   await Rain.insertMany([req.body]);
        // console.log(response);
        console.log('Update triggered')
        let response = await Rain.updateOne({
            _id: request.body.id
        }, { data: request.body.data }, { upsert: true });
        res.send(response);
    };
};

//fetch all blogs sorted as per likes
const getAllBlogs = () => {
    return async (req, res) => {
        let all = await Blogs.find({}).lean().exec();
        all = all.sort((a, b) => b.likes - a.likes);
        res.send(all);
    };
};

//search data with title
const getdataByTitle = () => {
    return async (req, res) => {
        let all = await Blogs.find({}).lean().exec();
        console.log(all);
        let filtered = all.filter((ele) => ele.title == req.body.title);

        res.send(filtered);
    };
};

//like particular blog : get by id and incerementing likes
const likeBlog = () => {
    return async (req, res) => {
        let items = await Blogs.findOne({ id: req.body.id });

        items.likes = items.likes + 1;
        let item = await Blogs.updateOne(
            { title: req.body.title },
            { $set: items }
        );

        res.send(`${items.likes}`);
    };
};

//fetch particular blog with id
const viweBlog = () => {
    return async (req, res) => {
        let items = await Blogs.findOne({ id: req.body.id });

        res.send(items);
    };
};

//default
const greet = () => {
    return async (req, res) => {
        res.send(
            '<div> <h1>Welcome to world of blogging<h1/> <div/><img src="https://i.ibb.co/Ryd3J1M/Blog-post.gif"/><div><h1>All paths<h1/><br><p> https://blog-backned.herokuapp.com/all <p/> to get all blogs<br><p> https://blog-backned.herokuapp.com/id <p/> to get a particular blog<br><p> https://blog-backned.herokuapp.com/author <p/> to search by author <br><p> https://blog-backned.herokuapp.com/add <p/><br><p> https://blog-backned.herokuapp.com/title <p/> to search by title<br><p> https://blog-backned.herokuapp.com/like <p/> to like <br><p> https://blog-backned.herokuapp.com/id <p/> <div/> '
        );
    };
};

module.exports = {
    post,
    all,
    getAllBlogs,
    likeBlog,
    getdataByTitle,
    viweBlog,
    greet, newRain, rainAll, getStrangeTable, postStrangeTable, updateRainData
};
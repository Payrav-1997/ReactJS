import React, {useState} from 'react';

export default function PostForm({onSave}) {
    const [post, setPost] = useState({
        id: Date.now(),
        author: {
            avatar: 'https://lms.openjs.io/logo_js.svg',
            name: 'OpenJS',
        },
        content: '',
        photo: {
            url: "",
            alt: "",
        },
        hit: false,
        likes: 0,
        likedByMe: false,
        hidden: false,
        tags: [],
        created: Date.now(),
    });

    const handleSubmit = (ev) => {
        ev.preventDefault();
        const tags = post.tags.map((value, index) => value.replace("#", ""))
            .filter((value, index) => value !== "");
        onSave({
            ...post,
            tags: tags.length > 0 ? tags : null,
            photo: post.photo.url !==""? post.photo:null,
        })
    };
    const handleChange = (ev) => {
        const { value } = ev.target;
        setPost((prevState) => ({ ...prevState, content: value }));;
    }
    const handleTagsChange = (ev) => {
        const {name, value } = ev.target;
        if (name === "tags") {
            const parsed = value.split(" ");
            setPost((prevState) => ({ ...prevState, [name]: parsed }));
            return;
        }
        if (name === "photo" || name === "alt") {
            const photo = {
                url: name === "photo" ? value : post.photo.url,
                alt: name === "alt" ? value : post.photo.alt,
            };
            setPost((prevState) => ({ ...prevState, photo: photo, }));
            return;
        }
        
        setPost((prevState) => ({ ...prevState, [name]: value }));
    }
    return (
        <form onSubmit={handleSubmit}>
            <textarea
                value={post.content}
                onChange={handleChange}
            ></textarea>
            <input name="tags"
                value={post.tags?.join(' ')}
                onChange={handleTagsChange}
                placeholder="tags"
            ></input>
            <input
                 value={post.photo?.url}
                 onChange={handleChange}
                 name="photo"
                 placeholder="photo"
            ></input>
            <input
                value={post.photo?.alt}
                onChange={handleChange}
                name="alt"
                placeholder="alt"
            ></input>
            <button>Ok</button>
        </form>
    )
};


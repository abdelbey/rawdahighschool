const blogs = [
    {
        id: 1,
        img: [Blog1Img],
        title: 'Championships suit us',
        description: 'The kindergarten champions are crowned champions in school volleyball (2009 and below), male and female categories.'
    },
    {
        id: 2,
        img: [Blog2Img],
        title: 'Mother Day in kindergarten is a festival of love',
        description: 'It is life above life because it is through love that it fulfills, through giving it is nurtured, and through sacrifice it is preserved and cared for.'
    },
    {
        id: 3,
        img: [Blog3Img],
        title: 'Preparation and training in kindergarten',
        description: 'Three topics were addressed in the preparation and training course attended by the coordinators:'
    },
    {
        id: 4,
        img: [Blog4Img],
        title: 'Blog 4',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia voluptas suscipit ratione quod culpa, eius ad consequatur, dolor quasi nulla optio quo error tempora temporibus distinctio quidem asperiores dolore ex amet nam. Consequatur, odit corporis.'
    },
    {
        id: 5,
        img: [Blog5Img],
        title: 'Blog 5',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia voluptas suscipit ratione quod culpa, eius ad consequatur, dolor quasi nulla optio quo error tempora temporibus distinctio quidem asperiores dolore ex amet nam. Consequatur, odit corporis.'
    },
    {
        id: 6,
        img: [Blog6Img],
        title: 'Blog 6',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia voluptas suscipit ratione quod culpa, eius ad consequatur, dolor quasi nulla optio quo error tempora temporibus distinctio quidem asperiores dolore ex amet nam. Consequatur, odit corporis.'
    },
    {
        id: 7,
        img: [Blog7Img],
        title: 'Blog 7',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia voluptas suscipit ratione quod culpa, eius ad consequatur, dolor quasi nulla optio quo error tempora temporibus distinctio quidem asperiores dolore ex amet nam. Consequatur, odit corporis.'
    },
    {
        id: 8,
        img: [Blog8Img],
        title: 'Blog 8',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia voluptas suscipit ratione quod culpa, eius ad consequatur, dolor quasi nulla optio quo error tempora temporibus distinctio quidem asperiores dolore ex amet nam. Consequatur, odit corporis.'
    },
    {
        id: 9,
        img: [Blog9Img],
        title: 'Blog 9',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia voluptas suscipit ratione quod culpa, eius ad consequatur, dolor quasi nulla optio quo error tempora temporibus distinctio quidem asperiores dolore ex amet nam. Consequatur, odit corporis.'
    },
];
function Blog() {
  return (
      <div>
          <h1>Blog</h1>
          <ul>
              {blogs.map(blog => (
                  <li key={blog.id}>
                      <Link to={`/blogs/${blog.id}`}>{blog.title}</Link>
                  </li>
              ))}
          </ul>
      </div>
  );
}
  
  export default Blog;
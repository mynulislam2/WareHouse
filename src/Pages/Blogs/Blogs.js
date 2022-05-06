import React from 'react';
import { Container } from 'react-bootstrap';
import './Blogs.css';
const Blogs = () => {
    return (
        <Container className='d-flex justify-content-center'>
            <div className="blog_banner">
                <div className='mt-5'>
                    <img src="https://i.ibb.co/LDwFkWK/maxresdefault.jpg" alt="" />

                    <div className="d-flex mt-5 mb-5">
                        <div>
                            <h5>Javscript </h5>
                            javascript is programming language
                            it run on the browser
                            it basically used in client side
                            it run on the browser engine like js core in safari ,spidermonkey in firefox
                            some of javascript frameworks like ramda.js type
                            js are capable to work with Dom
                        </div>

                        <div className='ms-5'>
                            <h5>Node.js</h5>
                            Node.js is javascript run time environment
                            it allows js to sever side
                            it allows javascript to outside the browser
                            it mainly used in server side
                            v8 is the js engine inside of node.js
                            it does not allow to work with Dom
                        </div>
                    </div>

                </div>
                <div>
                    <img  src="https://i.ibb.co/cDqd11Y/maxresdefault.jpg" alt="" />
                    <div className="d-flex mt-5 mb-5">
                        <div>
                            <h5>SQL DATABASE</h5>
                            Table with fixed rows and columns data storage model
                            It uses for General purpose
                            vertically scalable
                            Follows ACID property
                            These databases are not suited for hierarchical data storage.
                            It have static schema
                        </div>

                        <div className='ms-5'>
                            <h5>NO SQL DATABASE</h5>
                            Flexible Data storage model with json document
                            Horizontally scalable
                            Follows CAP(consistency, availability, partition tolerance)
                            These databases are best suited for hierarchical data storage.
                            They have dynamic schema
                            it does not allow to work with Dom
                        </div>
                    </div>
                </div>
                <div>
                    <img className="borderBlog" src="https://i.ibb.co/wsbwchz/57d4f32502a5.jpg" alt="" />
                    <div className="mb-5">
                        <h5 className='mt-5'> What is the purpose of jwt?</h5>
                        A JWT is a mechanism to verify the owner of some JSON data. It’s an encoded, URL-safe string that can contain an unlimited amount of data  and is cryptographically signed.
                        JWT can be used as an access token to prevent unwanted access to a protected resource.

                        <h5 className='mt-3'>How Does JWT Work?</h5>
 
Step 1 
 
Client logs in with his/her credentials.
 
Step 2
 
Server generates a Jwt token at server side. 
 
 
Step 3
 
After token generation, the server returns a token in response.
 
Step 4
 
Now, the client sends a copy of the token to validate the token. 

Step 5
 
The server checks JWT token to see if it's valid or not.
 
Step 6

After the token is validated, the server sends a status message to the client.
                     </div>
                </div>
                <div>
                    <img className="borderBlog" src="https://i.ibb.co/MkhNsqr/2a3eb4a0-182a-4512-8319-87951b124a7d.png"
                        alt=""
                    />
                    <h5 className='mt-5'>When should you use nodejs and when should you use mongodb?</h5>
                     MongoDB is NoSQL database which is document oriented.NodeJS is a JavaScript runtime environment. It's actually helps JavaScript to run outside of server. It's used in server side development.when someone need a database to store data we can use mongodb.and it is easy to use because it is document oriented.and to connect with MongoDB we need an connector .in this time we can use node .js
                </div>



            </div>

        </Container>
    );
};

export default Blogs;
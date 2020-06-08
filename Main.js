import React, { Component } from 'react';
import Identicon from 'identicon.js';

class Main extends Component {

  render() {
    return (
      <div className="container-fluid mt-5">
        <div className="row">
          {/* <div class="row"> */}
  <div class="column"><div class="card">
    <p class="cs1" ><b>Decentralised Social Media PLatform</b></p>
    <p>BlockBook is a social media dapp built  on top of the blockchain technology that allows the development of applications and smart contracts.</p>
    <hr/>
    <p class="cs2"> <b><span>Why BlockBook?</span></b></p>
    <p> Presently, data is one of the most profitable assets. Those in control of data have the power to control the mind, behavior, and other aspects of the data producer. Moreover, centralized social media platforms are goldmines of personal data.

It is an open secret that the likes of Facebook and Instagram, among others, leverage the user’s data to enable targeted advertisement for their clients. Here, remind yourself of the times that you browsed something on Amazon, and the product’s ad kept popping up on Facebook, Instagram, and virtually everywhere.

Although the technique is applaudable from a marketing perspective, it has grave implications for the user at the receiving end. That is, the user is being commodified, turned into a product and, in essence, stripped of the privacy.

Owing to their peer-to-peer network, end-to-end encryption, and the absence of ‘third-parties,’ distributed social media platforms rule out such threats of user commodification. Also, by extension, it imparts the users greater control over their data.</p>
    <br />
    <hr />
    <p class ="cs3"><b>To Know More About BlockBook</b></p>
    <a href="www.BlockBookdevelopers.com">Contact us</a>
  <p></p></div></div>
        <div class="column">
        <div class="card">NewsFeed</div>
          <main role="main" className="col-lg-12 ml-auto mr-auto" style={{ maxWidth: '500px' }}>
            <div className="content mr-auto ml-auto">
              <p>&nbsp;</p>
                <form onSubmit={(event) => {
                  event.preventDefault()
                  const content = this.postContent.value
                  this.props.createPost(content)
                }}>
                <div className="form-group mr-sm-2">
                  <input
                    id="postContent"
                    type="text"
                    ref={(input) => { this.postContent = input }}
                    className="form-control"
                    placeholder="What's on your mind?"
                    required />
                </div>
                <button type="submit" className="btn btn-primary btn-block">Share</button>
              </form>
              <p>&nbsp;</p>
              { this.props.posts.map((post, key) => {
                return(
                  <div className="card mb-4" key={key} >
                    <div className="card-header">
                      <img
                        className='mr-2'
                        width='30'
                        height='30'
                        src={`data:image/png;base64,${new Identicon(post.author, 30).toString()}`}
                      />
                      <small className="text-muted">{post.author}</small>
                    </div>
                    <ul id="postList" className="list-group list-group-flush">
                      <li className="list-group-item">
                        <p>{post.content}</p> 
                      </li>
                      <li key={key} className="list-group-item py-2">
                        <small className="float-left mt-1 text-muted">
                          like: {window.web3.utils.fromWei(post.tipAmount.toString(), 'Ether')}like
                        </small>
                        <button
                          className="btn btn-link btn-sm float-right pt-0"
                          name={post.id}
                          onClick={(event) => {
                            let tipAmount = window.web3.utils.toWei('1', 'Ether')
                            console.log(event.target.name, tipAmount)
                            this.props.tipPost(event.target.name, tipAmount)
                          }}
                        >
                          like
                        </button>
                        <div className="form-group mr-sm-2">


                  <input
                    id="postContent"
                    type="text"
                    // ref={(input) => { this.postContent = input }}
                    className="form-control"
                    placeholder="What do you think about this post"
                    required />
                </div>
                <button type="submit"  class="btn btn-info">comment</button>
                      </li>
                    </ul>
                  </div>
                )
              })}
            </div>
          </main>
          </div>
          <div class="column"> <div class="card"><b class="cs4">Upcoming Updates</b>
          <p> </p>
            <ol >
             <li>Photo Posting</li>
             <li>Emoji Clicker</li>
             <li>Profile Display</li>
             </ol>
             

          </div> </div>
          </div>
          
        </div>
        
      // </div>
       
    );
  }
}

export default Main;
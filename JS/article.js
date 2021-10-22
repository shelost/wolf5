

let post =
{
    "title":"Why Now Is The Time To Start Investing",
    "blurb":"By: Hillel Weitzman",
    "tags":[],
    "image":"https://miro.medium.com/max/700/0*n_yrdNXwQ-p43iB6",
    "isPublished":true,"_id":"5ebadc66731a3f04b686c297",
    "author":{"fullName":"Michael Grant Warshowsky",
    "_id":"5eba2935c9e191400fe778d4",
    "id":"5eba2935c9e191400fe778d4"},
    "publishedAt":"2020-05-12T17:27:23.373Z",
    "id":"5ebadc66731a3f04b686c297",
    "content": `

    <p>
    While the devastating forces of COVID-19 have affected all aspects of life, the impact on the stock market has been both tragic and easily quantifiable. Young investors’ disposable incomes, typically allocated to relatively volatile stocks, experienced a jarring drop in their portfolios, often into negative figures. Older investors saw the value of their Index Fund shares fall like a boulder being pushed off a mountain.
    </p>

    <p>
    The trope being heard by all Americans is that we are in the midst of one of the most devastating times for investors that the stock market has ever seen. But a key investment element is being left unexplained to non-investors. The unspoken advice is that while tragedy has pervaded the portfolios of almost everyone with money in the market, now is actually the perfect time to begin investing.
    </p>

    <p>
    One of Warren Buffett’s most famous snippets of investment advice is to “be fearful when others are greedy and to be greedy only when others are fearful”. What he means is, when everybody seems to be selling all of their shares to get out of the market, that is the perfect time to be doing just the opposite (and vice versa).
    </p>

    <p>
    If you could have bought a share of S&P 500 in late February, when others were “greedy” and share prices were hitting an all-time high, and sold that share a month later when people were fearfully offloading stock, you would have lost nearly $1,000. Conversely, if you had bought a single share in late March, and sold it a month later when people’s fears were beginning to subside, you would have netted over $400 dollars.
    </p>

    <p>
    For those who have been wary to invest in the past due to a lack of knowledge, now is not only the perfect time to learn about investing due to the abundance of free time, but is also the perfect time to begin investing yourself. The drawn-out economic impacts of this pandemic will persist into the months to come, and it is crucial to take note of when others are fearful so you can know when not to be.
    </p>

    <p>
    Our platform WOLF is designed to help you accomplish exactly this. WOLF allows you to select any public company and offers you an easy to read breakdown report of the companies key financials, ratios, and market sentiment along with a company synopsis. It explains this information to you as a person would, and uses simple tactics like color-coding to make everything as easy as possible. Our artificial intelligence engine does not employ the tactics of the masses, pressuring you to sell off stock due to fear, rather it uses machine learning and financial analysis to help empower you to be a confident investor who buys and sells at exactly the right time.
    </p>
    `
};

Class('footer')[0].remove()

/*

var POST_ID = window.location.search.substring(4, window.location.search.length)

let post = {};

function httpGet(theUrl) {
    var xmlHttp = new XMLHttpRequest()
    xmlHttp.open('GET', theUrl, false);
    xmlHttp.send(null)
    return xmlHttp.responseText
}

// get blogpost where blogString is its Id
let blogRequest = JSON.parse(
    httpGet(`https://api.wolf.financial/v1/blog-posts/${POST_ID}`,),
)
if (blogRequest.success) {
    post = blogRequest.payload.blogPost;
} else {
    alert('failed to load content!');
}
*/


Class('main')[0].innerHTML =
    `

    <div class = 'banner' style = 'background-image: url(${post.image})'> </div>
    <div class = 'article'>
    <div class = 'header'>
        <h1> ${post.title} </h1>
        <h2>
        ${post.blurb.substr(post.blurb.indexOf(': ')+1, post.blurb.length)}
        <span class = 'date'> · ${post.publishedAt.substring(5,7)}/${post.publishedAt.substring(8,10)}/${post.publishedAt.substring(0,4)}</span>
        </h2>
    </div>

    `
    + post.content +
    `
    </div>
    `

var nodeA = document.createElement('meta');
nodeA.setAttribute('property', 'og:image');
nodeA.content = post.image;
document.getElementsByTagName('head')[0].appendChild(nodeA);
var nodeB = document.createElement('meta');
nodeB.setAttribute('property', 'og:title');
nodeB.content = post.title;
document.getElementsByTagName('head')[0].appendChild(nodeB);
var nodeC = document.createElement('meta');
nodeC.setAttribute('property', 'og:description');
nodeC.content = post.blurb;
document.getElementsByTagName('head')[0].appendChild(nodeC);
var nodeD = document.createElement('meta');
nodeD.setAttribute('property', 'og:url');
nodeD.content = `//wolf.financial/pages/article.html?id=${POST_ID}`;
document.getElementsByTagName('head')[0].appendChild(nodeD);
var nodeE = document.createElement('meta');
nodeE.setAttribute('property', 'og:type');
nodeE.content = "website";
document.getElementsByTagName('head')[0].appendChild(nodeE);


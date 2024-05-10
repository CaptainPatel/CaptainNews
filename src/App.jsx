import { useEffect, useState } from "react"

const App = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    // get 10 articles as that's all we need
    const getNews = async () => {
      try {
        // its for caching the articles as i may need them again 
        const cachedArticles = localStorage.getItem("articles");
        if (cachedArticles) {
          setArticles(JSON.parse(cachedArticles));
        }
        const response = await fetch("https://captainnews-backend.onrender.com/getNews");
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json(); // Parse the json response
        setArticles(data.data);
        localStorage.setItem("articles", JSON.stringify(data.data));
      } catch (error) {
        console.log(error);
      }
    }
    getNews();
  }, [])
  const handleTagClick = async (tag) => {
    try {
      const response = await fetch(`https://captainnews-backend.onrender.com/getNews/${tag}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json(); // Parse the JSON response
      setArticles(data.data);
    } catch (error) {
      console.log(error);
    }
  }
  // I don't use this currently
  // I can use it when i want the images to redirect as well
  const redirectToSource = async (index) => {
    try {
      window.location.href = articles[index].url;
    } catch (error) {
      alert("Cannot Redirect");
    }
  }
  return (
    <div>
      <>
        {/* Modernizr JS */}
        <div className="container-fluid fh5co_header_bg">
          <div className="container">
            <div className="row">
              <div className="col-12 fh5co_mediya_center">
                <a href="#" className="color_fff fh5co_mediya_setting">
                  <i className="fa fa-clock-o" />
                  &nbsp;&nbsp;&nbsp;
                </a>
                <div className="d-inline-block fh5co_trading_posotion_relative">
                  <a href="#" className="treding_btn">
                    Trending
                  </a>
                  <div className="fh5co_treding_position_absolute" />
                </div>
                <a href="#" className="color_fff fh5co_mediya_setting">
                  Instagram’s big redesign goes live with black-and-white app
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-3 fh5co_padding_menu">
                <img src="images/logo.png" alt="img" className="fh5co_logo_width" />
              </div>
              <div className="col-12 col-md-9 align-self-center fh5co_mediya_right">
                <div className="text-center d-inline-block">
                  <a href="https://www.linkedin.com/in/captainpatel" className="fh5co_display_table">
                    <div className="fh5co_verticle_middle">
                      <i className="fa fa-linkedin" />
                    </div>
                  </a>
                </div>
                <div className="clearfix" />
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid bg-faded fh5co_padd_mediya padding_786">
          <div className="container padding_786">
            <nav className="navbar navbar-toggleable-md navbar-light ">
              <button
                className="navbar-toggler navbar-toggler-right mt-3"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="fa fa-bars" />
              </button>
              <a className="navbar-brand" href="#">
                <img src="images/logo.png" alt="img" className="mobile_logo_width" />
              </a>
            </nav>
          </div>
        </div>
        <div className="container-fluid paddding mb-5">
          <div className="row mx-0">
            <div
              className="col-md-6 col-12 paddding animate-box"
              data-animate-effect="fadeIn"
            >
              <div className="fh5co_suceefh5co_height">
                <img src={articles[0]?.urlToImage || "images/no_image"} alt="img" />
                <div className="fh5co_suceefh5co_height_position_absolute" />
                <div className="fh5co_suceefh5co_height_position_absolute_font">
                  <div className="">
                    <a href={articles[0]?.url} className="color_fff">
                      {" "}
                      <i className="fa fa-clock-o" />
                      &nbsp;&nbsp;{articles[0]?.publishedAt.substring(0, 10)}
                    </a>
                  </div>
                  <div className="">
                    <a href={articles[0]?.url} className="fh5co_good_font">
                      {" "}
                      {articles[0]?.title} {" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="row">
                <div
                  className="col-md-6 col-6 paddding animate-box"
                  data-animate-effect="fadeIn"
                >
                  <div className="fh5co_suceefh5co_height_2">
                    <img src={articles[1]?.urlToImage} alt="img" />
                    <div className="fh5co_suceefh5co_height_position_absolute" />
                    <div className="fh5co_suceefh5co_height_position_absolute_font_2">
                      <div className="">
                        <a href={articles[1]?.url} className="color_fff">
                          {" "}
                          <i className="fa fa-clock-o" />
                          &nbsp;&nbsp;{articles[1]?.publishedAt.substring(0, 10)}{" "}
                        </a>
                      </div>
                      <div className="">
                        <a href={articles[1]?.url} className="fh5co_good_font_2">
                          {" "}
                          {articles[1]?.title}{" "}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-md-6 col-6 paddding animate-box"
                  data-animate-effect="fadeIn"
                >
                  <div className="fh5co_suceefh5co_height_2">
                    <img src={articles[2]?.urlToImage} alt="img" />
                    <div className="fh5co_suceefh5co_height_position_absolute" />
                    <div className="fh5co_suceefh5co_height_position_absolute_font_2">
                      <div className="">
                        <a href={articles[2]?.url} className="color_fff">
                          {" "}
                          <i className="fa fa-clock-o" />
                          &nbsp;&nbsp;{articles[2]?.publishedAt.substring(0, 10)}{" "}
                        </a>
                      </div>
                      <div className="">
                        <a href={articles[2]?.url} className="fh5co_good_font_2">
                          {" "}
                          {articles[2]?.title}{" "}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-md-6 col-6 paddding animate-box"
                  data-animate-effect="fadeIn"
                >
                  <div className="fh5co_suceefh5co_height_2">
                    <img src={articles[3]?.urlToImage} alt="img" />
                    <div className="fh5co_suceefh5co_height_position_absolute" />
                    <div className="fh5co_suceefh5co_height_position_absolute_font_2">
                      <div className="">
                        <a href={articles[3]?.url} className="color_fff">
                          {" "}
                          <i className="fa fa-clock-o" />
                          &nbsp;&nbsp;{articles[3]?.publishedAt.substring(0, 10)}{" "}
                        </a>
                      </div>
                      <div className="">
                        <a href={articles[3]?.url} className="fh5co_good_font_2">
                          {" "}
                          {articles[3]?.title}{" "}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-md-6 col-6 paddding animate-box"
                  data-animate-effect="fadeIn"
                >
                  <div className="fh5co_suceefh5co_height_2">
                    <img src={articles[4]?.urlToImage} alt="img" />
                    <div className="fh5co_suceefh5co_height_position_absolute" />
                    <div className="fh5co_suceefh5co_height_position_absolute_font_2">
                      <div className="">
                        <a href={articles[4]?.url} className="color_fff">
                          {" "}
                          <i className="fa fa-clock-o" />
                          &nbsp;&nbsp;{articles[4]?.publishedAt.substring(0, 10)}{" "}
                        </a>
                      </div>
                      <div className="">
                        <a href={articles[4]?.url} className="fh5co_good_font_2">
                          {" "}
                          {articles[4]?.title}{" "}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid pb-4 pt-4 paddding">
          <div className="container paddding">
            <div className="row mx-0">
              <div className="col-md-8 animate-box" data-animate-effect="fadeInLeft">
                <div>
                  <div className="fh5co_heading fh5co_heading_border_bottom py-2 mb-4">
                    News
                  </div>
                </div>
                {
                  articles?.map((article, index) => {
                    if (index > 5 && index < 11) {
                      return <div className="row pb-4" key={index}>
                        <div className="col-md-5">
                          <div className="fh5co_hover_news_img">
                            <div className="fh5co_news_img">
                              <img src={article?.urlToImage} alt="" />
                            </div>
                            <div />
                          </div>
                        </div>
                        <div className="col-md-7 animate-box">
                          <a href={article?.url} className="fh5co_magna py-2">
                            {" "}
                            {article.title}{" "}
                          </a>{" "}
                          <a className="fh5co_mini_time py-3">
                            {" "}
                            {article.author} - {article.publishedAt.substring(0, 10)}{" "}
                          </a>
                          <div className="fh5co_consectetur">
                            {" "}
                            {article.content}
                          </div>
                        </div>
                      </div>
                    }
                  })
                }
              </div>
              <div className="col-md-3 animate-box" data-animate-effect="fadeInRight">
                <div>
                  <div className="fh5co_heading fh5co_heading_border_bottom py-2 mb-4">
                    Tags
                  </div>
                </div>
                <div className="clearfix" />
                <div className="fh5co_tags_all">
                  <a href="#" className="fh5co_tagg" onClick={() => handleTagClick("business")}>
                    Business
                  </a>
                  <a href="#" className="fh5co_tagg" onClick={() => handleTagClick("technology")}>
                    Technology
                  </a>
                  <a href="#" className="fh5co_tagg" onClick={() => handleTagClick("sport")}>
                    Sports
                  </a>
                  <a href="#" className="fh5co_tagg" onClick={() => handleTagClick("health")}>
                    Health
                  </a>
                  <a href="#" className="fh5co_tagg" onClick={() => handleTagClick("general")}>
                    General
                  </a>
                  <a href="#" className="fh5co_tagg" onClick={() => handleTagClick("science")}>
                    Science
                  </a>
                  <a href="#" className="fh5co_tagg" onClick={() => handleTagClick("entertainment")}>
                    Entertainment
                  </a>
                </div>
              </div>
            </div>
            <div className="row mx-0 animate-box" data-animate-effect="fadeInUp">
              <div className="col-12 text-center pb-4 pt-4">
                <a href="#" className="btn_mange_pagging">
                  <i className="fa fa-long-arrow-left" />
                  &nbsp;&nbsp; Previous
                </a>
                <a href="#" className="btn_pagging">
                  1
                </a>
                <a href="#" className="btn_pagging">
                  2
                </a>
                <a href="#" className="btn_pagging">
                  3
                </a>
                <a href="#" className="btn_pagging">
                  ...
                </a>
                <a href="#" className="btn_mange_pagging">
                  Next <i className="fa fa-long-arrow-right" />
                  &nbsp;&nbsp;{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid fh5co_footer_bg pb-3">
          <div className="container animate-box">
            <div className="row">
              <div className="col-12 spdp_right py-5">
                <img src="images/logo.png" alt="img" className="footer_logo" />
              </div>
              <div className="clearfix" />
              <div className="col-12 col-md-4 col-lg-3">
                <div className="footer_main_title py-3"> About</div>
                <div className="footer_sub_about pb-3">
                  {" "}
                  Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry's standard dummy text
                  ever since the 1500s, when an unknown printer took a galley of type
                  and scrambled it to make a type specimen book.
                </div>
                <div className="footer_mediya_icon">
                  <div className="text-center d-inline-block">
                    <a className="fh5co_display_table_footer">
                      <div className="fh5co_verticle_middle">
                        <i className="fa fa-linkedin" />
                      </div>
                    </a>
                  </div>
                  <div className="text-center d-inline-block">
                    <a className="fh5co_display_table_footer">
                      <div className="fh5co_verticle_middle">
                        <i className="fa fa-google-plus" />
                      </div>
                    </a>
                  </div>
                  <div className="text-center d-inline-block">
                    <a className="fh5co_display_table_footer">
                      <div className="fh5co_verticle_middle">
                        <i className="fa fa-twitter" />
                      </div>
                    </a>
                  </div>
                  <div className="text-center d-inline-block">
                    <a className="fh5co_display_table_footer">
                      <div className="fh5co_verticle_middle">
                        <i className="fa fa-facebook" />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-3 col-lg-2">
                <div className="footer_main_title py-3"> Category</div>
                <ul className="footer_menu">
                  <li>
                    <a href="#" className="">
                      <i className="fa fa-angle-right" />
                      &nbsp;&nbsp; Business
                    </a>
                  </li>
                  <li>
                    <a href="#" className="">
                      <i className="fa fa-angle-right" />
                      &nbsp;&nbsp; Entertainment
                    </a>
                  </li>
                  <li>
                    <a href="#" className="">
                      <i className="fa fa-angle-right" />
                      &nbsp;&nbsp; Environment
                    </a>
                  </li>
                  <li>
                    <a href="#" className="">
                      <i className="fa fa-angle-right" />
                      &nbsp;&nbsp; Health
                    </a>
                  </li>
                  <li>
                    <a href="#" className="">
                      <i className="fa fa-angle-right" />
                      &nbsp;&nbsp; Life style
                    </a>
                  </li>
                  <li>
                    <a href="#" className="">
                      <i className="fa fa-angle-right" />
                      &nbsp;&nbsp; Politics
                    </a>
                  </li>
                  <li>
                    <a href="#" className="">
                      <i className="fa fa-angle-right" />
                      &nbsp;&nbsp; Technology
                    </a>
                  </li>
                  <li>
                    <a href="#" className="">
                      <i className="fa fa-angle-right" />
                      &nbsp;&nbsp; World
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-12 col-md-5 col-lg-3 position_footer_relative">
                <div className="footer_main_title py-3"> Most Viewed Posts</div>
                <div className="footer_makes_sub_font"> Dec 31, 2016</div>
                <a href="#" className="footer_post pb-4">
                  {" "}
                  Success is not a good teacher failure makes you humble{" "}
                </a>
                <div className="footer_makes_sub_font"> Dec 31, 2016</div>
                <a href="#" className="footer_post pb-4">
                  {" "}
                  Success is not a good teacher failure makes you humble{" "}
                </a>
                <div className="footer_makes_sub_font"> Dec 31, 2016</div>
                <a href="#" className="footer_post pb-4">
                  {" "}
                  Success is not a good teacher failure makes you humble{" "}
                </a>
                <div className="footer_position_absolute">
                  <img
                    src="images/footer_sub_tipik.png"
                    alt="img"
                    className="width_footer_sub_img"
                  />
                </div>
              </div>
              <div className="col-12 col-md-12 col-lg-4 ">
                <div className="footer_main_title py-3"> Last Modified Posts</div>
                <a href="#" className="footer_img_post_6">
                  <img src="images/allef-vinicius-108153.jpg" alt="img" />
                </a>
                <a href="#" className="footer_img_post_6">
                  <img src="images/32-450x260.jpg" alt="img" />
                </a>
                <a href="#" className="footer_img_post_6">
                  <img src="images/download (1).jpg" alt="img" />
                </a>
                <a href="#" className="footer_img_post_6">
                  <img src="images/science-578x362.jpg" alt="img" />
                </a>
                <a href="#" className="footer_img_post_6">
                  <img src="images/vil-son-35490.jpg" alt="img" />
                </a>
                <a href="#" className="footer_img_post_6">
                  <img src="images/zack-minor-15104.jpg" alt="img" />
                </a>
                <a href="#" className="footer_img_post_6">
                  <img src="images/download.jpg" alt="img" />
                </a>
                <a href="#" className="footer_img_post_6">
                  <img src="images/download (2).jpg" alt="img" />
                </a>
                <a href="#" className="footer_img_post_6">
                  <img src="images/ryan-moreno-98837.jpg" alt="img" />
                </a>
              </div>
            </div>
            <div className="row justify-content-center pt-2 pb-4">
              <div className="col-12 col-md-8 col-lg-7 ">
                <div className="input-group">
                  <span
                    className="input-group-addon fh5co_footer_text_box"
                    id="basic-addon1"
                  >
                    <i className="fa fa-envelope" />
                  </span>
                  <input
                    type="text"
                    className="form-control fh5co_footer_text_box"
                    placeholder="Enter your email..."
                    aria-describedby="basic-addon1"
                  />
                  <a
                    href="#"
                    className="input-group-addon fh5co_footer_subcribe"
                    id="basic-addon12"
                  >
                    {" "}
                    <i className="fa fa-paper-plane-o" />
                    &nbsp;&nbsp;Subscribe
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="gototop js-top">
          <a href="#" className="js-gotop">
            <i className="fa fa-arrow-up" />
          </a>
        </div>
        {/**/}
        {/* Waypoints */}
        {/* Main */}
      </>

    </div>
  )
}

export default App
const axios = require("axios");

module.exports = async (req, res) => {
  try {
    const response = await axios.get(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.07480&lng=72.88560&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: "An error occurred" });
  }
};

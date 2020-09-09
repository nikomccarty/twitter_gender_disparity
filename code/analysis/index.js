// setup API options
const options = {
  config: [{
    // Vega-Lite default configuration
  }],
  init: (view) => {
    // initialize tooltip handler
    view.tooltip(new vegaTooltip.Handler().call);
  },
  view: {
    // view constructor options
    // remove the loader if you don't want to default to vega-datasets!
    loader: vega.loader({
      baseURL: "https://cdn.jsdelivr.net/npm/vega-datasets@1/",
    }),
    renderer: "canvas",
  },
};

const v1 = vl.register(vega, vegaLite, options);

async function drawPlot() {

  const width = window.innerWidth * 0.9;
  const height = width;

  // 1. Access data
  const dataset = await d3.csv("./../../data/twitter2018_Werner_data_clean.csv", d3.autoType)

  console.table(dataset[0])

{
  // const chart = vl.markCircle()
  //   .data(dataset)
  //   .encode(
  //     vl.x().fieldQ('followers_count'),
  //     vl.y().fieldQ('ff_ratio'),
  //     v1.color().fieldN('female')
  //   )
  //   .width(800)
  //   .height(500)
  //   .render()
  //   .then(viewElement => {
  //     document.getElementById('view').appendChild(viewElement);
  //   });

  // const chart = vl.markCircle()
  //   .data(dataset)
  //   .encode(
  //     vl.x().fieldQ('origtweets_year'),
  //     vl.y().fieldQ('orig_likes_year'),
  //     v1.color().fieldN('female'),
  //     v1.size().fieldQ("followers_count")
  //   )
  //   .width(800)
  //   .height(500)
  //   .render()
  //   .then(viewElement => {
  //     document.getElementById('view').appendChild(viewElement);
  //   });

  // const chart = vl.markCircle()
  //   .data(dataset)
  //   .encode(
  //     vl.x().fieldQ('yrs_on_twitter').bin({maxbins: 10}),
  //     vl.y().fieldQ('ff_ratio'),
  //     v1.color().fieldN('female'),
  //     // v1.size().fieldQ("followers_count")
  //   )
  //   .width(800)
  //   .height(500)
  //   .render()
  //   .then(viewElement => {
  //     document.getElementById('view').appendChild(viewElement);
  //   });

  // const chart = vl.markBar()
  //   .data(dataset)
  //   .encode(
  //     vl.x().fieldN('female'),
  //     vl.y().fieldQ('avg_orig_message_likes').bin({maxbins: 40}),
  //     v1.color().count(),
  //     // v1.size().fieldQ("followers_count")
  //   )
  //   .width(600)
  //   .height(500)
  //   .render()
  //   .then(viewElement => {
  //     document.getElementById('view').appendChild(viewElement);
  //   });

  // const chart = vl.markPoint()
  //   .data(dataset)
  //   .encode(
  //     vl.x().fieldQ('avg_orig_message_retweets'),
  //     vl.y().fieldQ('avg_orig_message_likes'),
  //     v1.color().fieldQ('ff_ratio'),
  //     v1.shape().fieldN('female'),
  //     v1.size().fieldQ("followers_count")
  //   )
  //   .width(600)
  //   .height(500)
  //   .render()
  //   .then(viewElement => {
  //     document.getElementById('view').appendChild(viewElement);
  //   });

  const chart = vl.markPoint()
    .data(dataset)
    .encode(
      vl.x().fieldQ('avg_orig_message_retweets'),
      vl.y().fieldQ('avg_orig_message_likes'),
      v1.color().fieldQ('ff_ratio'),
      v1.shape().fieldN('female'),
      v1.size().fieldQ("followers_count")
    )
    .width(600)
    .height(500)
    .render()
    .then(viewElement => {
      document.getElementById('view').appendChild(viewElement);
    });
}

}
drawPlot()

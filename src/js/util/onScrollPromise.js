import $ from "jquery"

/*
  スクロールである場所まで到達したら呼ばれるプロミス
  引数1番目は、スクロール位置のピクセルか要素
  引数2番目は、windowHeightのどこで判定するか決める、0だとwindowの上辺、1だと下辺, 0.5だと真ん中

  .then(onScrollPromise($(".my-element")))
  .then(() => console.log("要素が表示された"))
*/

const targetIntervalY = $(".top").html() && $(".is_pc").html() ? $(window).height() :
  $(".columnPage").html() && $(".is_pc").html() ? -$(window).height() / 3
    : $(window).height() / 3

function getTargetY(arg) {
  const elementOffsetTop = arg.offset().top
  return elementOffsetTop + targetIntervalY
}

export default function onScrollPromise(arg, windowHeightCofficient = 0) {
  return function () {
    return new Promise(resolve => {
      const targetY = getTargetY(arg)
      function onScroll() {
        const scrollTop = $(document).scrollTop();
        if (scrollTop + window.innerHeight * windowHeightCofficient < targetY) {
          return
        }
        $(document).off("scroll", onScroll)
        arg.attr("data-show", true)
        resolve()
      }
      $(document).on("scroll", onScroll)
    })
  }
}

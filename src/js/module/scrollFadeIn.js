import $ from "jquery"
import onScrollPromise from "../util/onScrollPromise"

export default () => {
  const $target = $(".js-scroll__show")

  $target.each(function (i, elm) {
    onScrollPromise($(elm), 1)()
  })
}
import $ from "jquery";

const FooterDisplay = () => {
  $("#inputID").focus(function () {
    $("#footer").hide();
  });

  $("#inputID").focusOut(function () {
    $("#footer").show();
  });
};

export default FooterDisplay;

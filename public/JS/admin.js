
// document.getElementById("filter-stock").addEventListener("click", function() {
//     document.getElementById("subitem-stock").classList.toggle("show");
//     console.log("toggle")
// });


// sự kiển chuyển từ main product sang add product
$("#btnaddproduct").click(function() {
  $("#product_add").show();
  $("#product_manage").hide();
  $("#order_manager").hide();
});

// When the "Add Product" button inside the product add section is clicked, switch to the main product management section
$("#btn_addproduct").click(function() {
  $("#product_manage").show();
  $("#product_add").hide();
});

// Event for switching to the product management section
$("#sbSanPham").click(function() {
  $("#product_manage").show();
  $("#order_manager").hide();
  $("#product_add").hide();
  console.log("quản lý sản phẩm");
});

// Event for switching to the order management section
$("#sbDonHang").click(function() {
  $("#product_manage").hide();
  $("#order_manager").show();
  $("#product_add").hide();
});
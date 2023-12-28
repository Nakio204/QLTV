function search() {
    var searchType = document.getElementById("searchType").value;
    var searchQuery = document.getElementById("searchQuery").value;
  
    // Gọi hàm tìm kiếm sách từ backend hoặc cơ sở dữ liệu
    var dg = getdgDetails(searchType, searchQuery);
  
    // Hiển thị thông tin chi tiết của sách
    var dgDetailsElement = document.getElementById("dgDetails");
    if (dg !== null) {
      document.getElementById("mamuon").innerText = "Mã mượn: " + dg.id;
      document.getElementById("madocgia").innerText = "Mã độc giả: " + dg.title;
      document.getElementById("hoten").innerText = "Họ tên: " + dg.hoten;
      document.getElementById("sodienthoai").innerText = "Số điện thoại: " + dg.sdt;
      document.getElementById("ngaysinh").innerText = "Ngày sinh: " + dg.ns;
      document.getElementById("diachi").innerText = "Địa chỉ: " + dg.diachi;
      dgDetailsElement.style.display = "block"; // Hiển thị phần tử bookDetails
    } else {
      dgDetailsElement.style.display = "none"; // Ẩn phần tử bookDetails nếu không tìm thấy sách
    }
  }
  // Hàm giả lập tìm kiếm sách
  function getdgDetails(searchType, searchQuery) {
    // Giả sử chúng ta có một cơ sở dữ liệu sách
    var dgDatabase = [
      { id: "M01", title: "DG1", hoten: "Nguyễn Tuấn Phước", sdt: "0111111111", ns: "1-1-2004", diachi: "Bắc Ninh" },
      { id: "M02", title: "DG2", hoten: "Thân Xuân Huy", sdt: "0111111112", ns: "2-2-2004", diachi: "Ba Vì" },
      { id: "M03", title: "DG3", hoten: "Nguyễn Văn Thanh", sdt: "0111111113", ns: "3-03-2004", diachi: "Ba Vì" },
      { id: "M04", title: "DG4", hoten: "Hoàng Yến Nhi", sdt: "0111111114", ns: "4-4-2004", diachi: "Thái Bình" },
      { id: "M05", title: "DG5", hoten: "Nguyễn Thái Sơn", sdt: "0111111115", ns: "5-5-2004", diachi: "Quảng Ninh" },
      { id: "M06", title: "DG6", hoten: "Vũ Thị Thanh Nhài", sdt: "0111111116", ns: "6-6-2004", diachi: "Thái Bình" },
      { id: "M07", title: "DG7", hoten: "Trần Anh Quân", sdt: "0111111117", ns: "7-7-2004", diachi: "Hà Nam" },
      { id: "M08", title: "DG8", hoten: "Đoàn Thị Kiều Diễm", sdt: "0111111118", ns: "8-8-2004", diachi: "Nam Định" },
    ];
    if (searchQuery.trim() == "") {
      // Hiển thị thông báo cảnh báo
      alert("Vui lòng nhập từ khóa");
      // Ngăn chặn việc gửi biểu mẫu
      return false;
    }
    // Tìm kiếm sách dựa trên loại tìm kiếm và từ khóa
    let found = false; // Biến lưu trạng thái tìm kiếm
    for (var i = 0; i < dgDatabase.length; i++) {
      var dg = dgDatabase[i];
      if (searchType === "title" && dg.title.toLowerCase() === searchQuery.toLowerCase()) {
        found = true; // Đã tìm thấy độc giả
        return dg;
      } else if (searchType === "id" && dg.id.toLowerCase() === searchQuery.toLowerCase()) {
        found = true; // Đã tìm thấy độc giả
        return dg;
      }
    }
  
    if (!found) {
      // Nếu không tìm thấy độc giả, hiển thị thông báo cảnh báo
      alert("Vui lòng nhập lại từ khóa");
      // Ngăn chặn việc gửi biểu mẫu
      return false;
    }
  
    return null; // Trả về null nếu không tìm thấy độc giả
  }
  
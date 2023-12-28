function searchBook() {
    var searchType = document.getElementById("searchType").value;
    var searchQuery = document.getElementById("searchQuery").value;
  
    // Gọi hàm tìm kiếm sách từ backend hoặc cơ sở dữ liệu
    var book = getBookDetails(searchType, searchQuery);
  
    // Hiển thị thông tin chi tiết của sách
    var bookDetailsElement = document.getElementById("bookDetails");
    if (book !== null) {
      document.getElementById("masach").innerText = "Mã sách: " + book.Masach;
      document.getElementById("tensach").innerText = "Tên sách: " + book.Tensach;
      document.getElementById("tg").innerText = "Tác giả: " + book.Tacgia;
      document.getElementById("theloai").innerText = "Thể loại: " + book.Theloai;
      document.getElementById("nhaxb").innerText = "Nhà xuất bản: " + book.NhaSX;
      document.getElementById("NXB").innerText = "NXB: " + book.NXB;
      document.getElementById("soluong").innerText = "Số lượng: " + book.Soluong;
      document.getElementById("damuon").innerText = "Đã mượn: " + book.Damuon;
      bookDetailsElement.style.display = "block"; // Hiển thị phần tử bookDetails
    } else {
      bookDetailsElement.style.display = "none"; // Ẩn phần tử bookDetails nếu không tìm thấy sách
    }
  }
  // Hàm giả lập tìm kiếm sách
  function getBookDetails(searchType, searchQuery) {
    // Giả sử chúng ta có một cơ sở dữ liệu sách
    var bookDatabase = [
      {
        Masach: "M01",
        Tensach: "Đắc nhân tâm",
        Tacgia: "Dale Carnegie",
        Theloai: "Văn học" ,
        NhaSX:  "Phạm Văn Tươi",
        NXB: "1936",
        Soluong: "50",
        Damuon: "38",
      },
      {
        Masach: "M02",
        Tensach: "Đấu trường sinh tử",
        Tacgia: "Suzanne Collins",
        Theloai: "Tiểu thuyết" ,
        NhaSX:  " Scholastic",
        NXB: "2009",
        Soluong: "70",
        Damuon: "68",
      },
      {
        Masach: "M03",
        Tensach: "Ông già và biển cả",
        Tacgia: "Ernest Hemingway",
        Theloai: "Tiểu thuyết",
        NhaSX:  " Charles Scribner's Sons",
        NXB: "1952",
        Soluong: "60",
        Damuon: "21",
      },
      {
        Masach: "M04",
        Tensach: "Mật mã Da Vinci",
        Tacgia: "Dan Brown",
        Theloai: "Tiểu thuyết", 
        NhaSX:  "Doubleday Fiction",
        NXB: "2003",
        Soluong: "40",
        Damuon: "40",
      },
      {
        Masach: "M05",
        Tensach: "Hai số phận",
        Tacgia: "Jeffrey Archer",
        Theloai: "Thiểu thuyết", 
        NhaSX:  "Hodder & Stoughton",
        NXB: "1979",
        Soluong: "80",
        Damuon: "37",
      },
      {
        Masach: "M06",
        Tensach: "Cuộc sống không giới hạn",
        Tacgia: "Nick Vujicic",
        Theloai: "Tiểu sử", 
        NhaSX:  "Tổng hợp TP.HCM",
        NXB: "2012",
        Soluong: "120",
        Damuon: "112",
      },
      {
        Masach: "M07",
        Tensach: " Nhà giả kim",
        Tacgia: "Paulo Coelho",
        Theloai: "Tiểu thuyết", 
        NhaSX: "Nhã Nam",
        NXB: "2013",
        Soluong: "30",
        Damuon: "7",
      },
      {
        Masach: "M08",
        Tensach: "Dám nghĩ lớn",
        Tacgia: "David Joseph Schwartz",
        Theloai: "Sách tự lực", 
        NhaSX:  "Kim Đồng",
        NXB: "1959",
        Soluong: "40",
        Damuon: "17",
      },
      {
        Masach: "M09",
        Tensach: "Ngày xưa có một chuyện tình",
        Tacgia: "Nguyễn Nhật Ánh",
        Theloai: "Truyện dài", 
        NhaSX:  "Trẻ",
        NXB: "2016",
        Soluong: "35",
        Damuon: "31",
      },
      {
        Masach: "M10",
        Tensach: "Cánh đồng bất tận",
        Tacgia: "Nguyễn Ngọc Tư",
        Theloai: "Truyện ngắn", 
        NhaSX:  "Trẻ",
        NXB: "2018",
        Soluong: "25",
        Damuon: "2",
      },
    ];
    if (searchQuery.trim () == "") {
      // Hiển thị thông báo cảnh báo
      alert ("Vui lòng nhập từ khóa");
      // Ngăn chặn việc gửi biểu mẫu
      return false;
    }
    // Tìm kiếm sách dựa trên loại tìm kiếm và từ khóa
    let found = false;
    // Tìm kiếm sách dựa trên loại tìm kiếm và từ khóa
    for (var i = 0; i < bookDatabase.length; i++) {
      var book = bookDatabase[i];
      if (searchType === "Masach" && book.Masach.toLowerCase() === searchQuery.toLowerCase()) {
        found = true;
        return book;
      } else if (searchType === "Tensach" && book.Tensach.toLowerCase() === searchQuery.toLowerCase()) {
        found = true;
        return book;
      }
    }
    if (!found) {
      // Nếu không tìm thấy độc giả, hiển thị thông báo cảnh báo
      alert("Vui lòng nhập lại từ khóa");
      // Ngăn chặn việc gửi biểu mẫu
      return false;
    }
  
    return null; // Trả về null nếu không tìm thấy sách
  }
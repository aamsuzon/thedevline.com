
<!--Stroy details full page reding story built option -->
$.get("http://json-lipsum.appspot.com/?start=no&amount=" + Math.ceil(Math.random() * 30), {}, function (result) {
    $.each(result.lipsum, function (index, value) {
        $("#textContainer").append("<p>" + value + "</p>");
    });
}, "jsonp");


<!--dxList view widget option get data vai json api-->
autoPaging = ko.observable(true);
nextButton = ko.observable(false);
 
//An object passed to the dataSource configuration option of the list
listDataSource = new DevExpress.data.DataSource({
    store: [],
    pageSize: 5
});
 
//Loads json data and passes it to the DataSource
$.get("Content/data/states.txt", function (data) {
    for (var i = 0; i < data.length; i++) {
        listDataSource.store().insert(data[i]);
    }
    listDataSource.pageIndex(0);
    listDataSource.load();
}, "json");
 
//Generates the path to the required image file
getImagePath = function (name) {
  return "http://phonejs.devexpress.com/Content/images/doc/13_2/PhoneJS/flags/" + name.replace(" ", "") + ".gif";
};
<!--dxList view widget option get data vai json api-->
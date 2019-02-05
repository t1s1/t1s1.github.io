$(document).ready(function() {
    $('#datatable').DataTable( {
        "ajax": "../data/courselist.txt",
        "columns": [
            {"data": "Source"},
            {"data": "GK Code"},
            {"data": "Course Name"},
            {"data": "Product Line"},
            {"data": "Topic"}
        ]
    } );
} );

$(document).ready(function() {
    $('#datatable').DataTable( {
         ajax: {
            url: '../data/courselist.txt',
            dataSrc: ''
        },
        columns: [
            {"data": "Source"},
            {"data": "GK Code"},
            {"data": "Course Name"},
            {"data": "Product Line"},
            {"data": "Topic"}
        ]
    } );
} );

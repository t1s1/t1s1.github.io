$(document).ready(function() {
    $('#datatable').DataTable( {
        "ajax": "../data/courselist.txt",
        "dom": "B",
        "columns": [
            {"data": "Source"},
            {"data": "Course Name"},
            {"data": "Product Line"},
            {"data": "Topic"}
        ],
        "buttons": [
            'copy', 'excel', 'pdf'
        ]
    } );
} );

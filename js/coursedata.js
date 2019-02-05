$(document).ready(function() {
    $('#datatable').DataTable( {
        ajax: "../data/courselist.txt",
        columns: [
            {"data": "Source"},
            {"data": "Course Name"},
            {"data": "Product Line"},
            {"data": "Topic"}
        ],
        dom: "Bfrtip",
        buttons: [
            'copy', 'excel', 'pdf'
        ]
    } );
} );

$(document).ready(function() {
    $('#datatable').DataTable( {
        ajax: "../data/courselist.txt",
        columns: [
            {"data": "GK Code"},
            {"data": "Source"},
            {"data": "Course Name"},
            {"data": "Product Line"},
            {"data": "Topic"}
        ],
        dom: 'Bfrtip',
        buttons: [
            'copyHtml5',
            'excelHtml5',
            'csvHtml5'
        ]
    } );
} );

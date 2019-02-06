$(document).ready(function() {
    var coursetable = $('#datatable').DataTable( {
        ajax: "../data/courselist.txt",
        columns: [
            {"data": "GK Code"},
            {"data": "Source"},
            {"data": "Course Name"},
            {"data": "Product Line"},
            {"data": "Topic"}
        ],
        buttons: [ 'csv', 'excel', 'pdf', 'print' ]
    } );
    coursetable.buttons().container().appendTo( $('.col-sm-6:eq(0)', coursetable.table().container() ) );
} );

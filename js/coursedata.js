$(document).ready(function() {
    var coursetable = $('#datatable').DataTable( {
        //ajax: "../data/courselist.txt",
        dom: 'Bfrtip',
        columns: [
            {"data": "GK Code"},
            {"data": "Source"},
            {"data": "Course Name"},
            {"data": "Product Line"},
            {"data": "Topic"}
        ],
        buttons: [ "'csv', 'excel', 'pdf', 'print'" ],
        pageLength: 20
    } );
    coursetable.buttons().container().appendTo( $('.col-sm-6:eq(0)', coursetable.table().container() ) );
} );

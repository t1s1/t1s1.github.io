$(document).ready(function() {
    $('#datatable').DataTable( {
        "ajax": '../data/courselist.txt'
    } );
} );

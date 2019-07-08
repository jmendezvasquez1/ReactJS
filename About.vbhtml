@Code
    ViewData("Title") = "About"
End Code
<script src="//code.jquery.com/jquery-1.11.1.min.js"></script>
<h2>@ViewData("Title").</h2>
<h3>@ViewData("Message")</h3>
<script>
       $(document).ready(function (){       
        $('a[data-toggle="tab"]').on('show.bs.tab', function (e) {

            var $target = $(e.target);

            if ($target.parent().hasClass('disabled')) {
                return false;
            }
        });
        $(".next-step").click(function (e) {

            var $active = $('.container .nav-tabs li.active');
            $active.next().removeClass('disabled');
            console.log($active.toString());
            nextTab($active);

        });
      
        $(".prev-step").click(function (e) {

            var $active = $('.container .nav-tabs li.active');
            prevTab($active);

        });
        function nextTab(elem) {
            $(elem).next().find('a[data-toggle="tab"]').click();
        }
        function prevTab(elem) {
            $(elem).prev().find('a[data-toggle="tab"]').click();
        }
        $("#pais").change(function(){
            var seleccion = $('#pais').val();
            $('#depto').empty();
            $.ajax({
                type:'POST',
                url: '@Url.Action("CargarDepto")',
                dataType: 'json',
                data: { pais: seleccion},
                success: function (res) {
                    $('#depto').append('<option>--Seleccione--</option>');
                    $.each(res, function (i, res) {
                        $('#depto').append('<option value="' + res.Value + '">' + res.Text + '</option>');
                    });
                }
            });                    
        });
           $("#depto").change(function () {
               var seleccion = $('#depto').val();
               $('#municipio').empty();
               $.ajax({
                   type: 'POST',
                   url: '@Url.Action("CargarMunicipio")',
                   dataType: 'json',
                   data: { municipio: seleccion },
                   success: function (res) {
                       $('#municipio').append('<option>--Seleccione--</option>');

                       $.each(res, function (i, res) {
                           $('#municipio').append('<option value="' + res.Value + '">' + res.Text + '</option>');
                       });
                   }
               });
           });

    });
</script>
<div class="container">
    <ul class="nav nav-tabs">
        <li class="active"><a data-toggle="tab" href="#home">Home</a></li>
        <li class="disabled"><a data-toggle="tab" href="#step1">step 1</a></li>
        <li class="disabled"><a data-toggle="tab" href="#step2">step 2</a></li>
    </ul>
    <div class="tab-content">
        <div id="home" class="tab-pane fade in active">
            Select a Pais:
            <select class="form-control" name="pais" id="pais">
                <option>--Seleccione--</option>
               @for Each pais In ViewBag.Pais
                @<option value="@pais.idPais">@pais.pais1</option>
               Next
               </select>
            Select a Departamento
            <select class="form-control" name="departamento" id="depto">
                            <option>-Seleccione</option>
            </select>
            Select Case a Municipio
            <select Class="form-control" name="municpio" id="municipio">
                <option>-Seleccione</option>
            </select>
            <Button Class="btn btn-primary next-step">Next</button>
        </div>
        <div id="step1" class="tab-pane fade">
            <h3>Menu 1</h3>
            <p>Some content in menu 1.</p>
            <button class="btn btn-default prev-step">Prev</button>
            <button class="btn btn-primary next-step">Next</button>
        </div>
        <div id="step2" class="tab-pane fade">
            <h3>Menu 2</h3>
            <p>Some content in menu 2.</p>
            <button class="btn btn-default prev-step">Prev</button>
            <button class="btn btn-primary next-step">Next</button>
        </div>
    </div>
</div>

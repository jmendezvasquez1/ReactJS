Imports MntClientes
Public Class HomeController
    Inherits System.Web.Mvc.Controller

    Function Index() As ActionResult
        Return View()
    End Function

    Function About() As ActionResult
        Dim db As New pruebasEntities()
        Dim pais = From p In db.pais
        ViewBag.Pais = pais.ToList()
        ViewData("Message") = "Your application description page."
        Return View()
    End Function

    <HttpPost>
    Function CargarDepto(ByVal pais As String) As JsonResult
        Dim db As New pruebasEntities()
        Dim dpt = From di In db.depto Where di.idPais = pais Select di.departamento, di.idDepto
        Dim d As New List(Of depto)
        For Each item In dpt.ToList()
            Dim model As New depto()
            model.departamento = item.departamento
            model.idDepto = item.idDepto
            d.Add((model))
        Next
        Return Json(New SelectList(d, "idDepto", "departamento"))
    End Function

    Function CargarMunicipio(ByVal municipio As String) As JsonResult
        Dim db As New pruebasEntities()
        Dim dpt = From m In db.municipio Where m.idDepto = municipio Select m.idMucnipio, m.municipio1
        Dim d As New List(Of municipio)
        For Each item In dpt.ToList()
            Dim model As New municipio()
            model.idMucnipio = item.idMucnipio
            model.municipio1 = item.municipio1
            d.Add((model))
        Next
        Return Json(New SelectList(d, "idMucnipio", "municipio1"))
    End Function


    Function Contact() As ActionResult
        ViewData("Message") = "Your contact page."

        Return View()
    End Function
End Class

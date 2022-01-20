<h1>LOGIN FORM</h1>

<form action="formmsg" method="POST">
    @csrf
    <input type="text" name="username" placeholder="eg :xyz">
    <span style="color: red">@error('username'){{$message}}@enderror</span>
    <input type="password" name="password" placeholder="dsdwe2ef!">
    <span style="color: red">@error('password'){{$message}}@enderror</span>
    <button type="submit">login</button>

</form>
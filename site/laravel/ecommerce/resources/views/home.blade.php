@include('header');
<h1>MAIN PAGE</h1>


@include('b1');
<h1>{{$users=""}}</h1>
{{-- @foreach ($users as $item)
<h2>{{$item}}</h2>
@endforeach --}}


@include('footer');

@csrf
<script>
    var data =  @json($users);
    console.warn(data);
    
</script>

@include('header');
<h1>blade template</h1>


@if($users=="aniket")
<h2>hello {{$users}}</h2>
@elseif($users=="sarvesh")
<h2>hii {{$users}}</h2>
@else
<h2>welcome unknown</h2>
@endif


@csrf

{{-- @foreach ($users as $item)
    <h2>{{$item}}</h2>
@endforeach --}}

@include('footer');
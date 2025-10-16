<table border="1" cellpadding="5" cellspacing="0">
    <thead>
        <tr>
            @foreach($columns as $col)
                <th>{{ ucfirst($col) }}</th>
            @endforeach
        </tr>
    </thead>
    <tbody>
        <!-- data have all columns -->
        @foreach($data as $row)
            <tr>
                @foreach($columns as $col)
                    <td>{{ $row[$col] }}</td>
                @endforeach
            </tr>
        @endforeach
    </tbody>
</table>

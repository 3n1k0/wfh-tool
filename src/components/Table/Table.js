const Table = () => {
  return (
    <>
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Date</th>
            <th scope="col">Worked from</th>
            <th scope="col">WFH Allowance</th>
            <th scope="col">OV receipt</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>23/03/2022 - Monday</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>24/03/2022 - Tuesday</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>25/03/2022 - Wednesday</td>
            <td>@twitter</td>
            <td>@twitter</td>
          </tr>
          <tr>
            <td colspan="2">Total:</td>
            <td></td>
            <td>€ 20</td>
            <td>€ 20</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Table;

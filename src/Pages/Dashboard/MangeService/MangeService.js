import React from "react";
import { Spinner, Table } from "react-bootstrap";

const MangeService = () => {
  return (
    <div className="container">
      <div class="row">
        <div className="col-md-12">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>User Name</th>
                <th>Product Name</th>
                <th>Adderss</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                {/* <td>{index}</td>
                    <td>{order.name}</td>
                    <td>{order.product}</td>
                    <td>{order.address}</td>
                    */}
                <td>
                  <form>
                    <select>
                      <option></option>
                      <option value="approve">Pending</option>
                      <option value="approve">Approve</option>
                      <option value="done">Done</option>
                    </select>
                    <input
                      type="submit"
                      value="Update"
                      className="update-btn ms-2"
                    />
                  </form>
                </td>
                <div className="btn-div">
                  <span className="delete-btn me-2">Delete</span>
                </div>
              </tr>
            </tbody>
            {/* <div className="spiner mx-auto pt-5">
              <Spinner className="text-center" animation="border" />
            </div> */}
          </Table>
        </div>
      </div>
    </div>
  );
};

export default MangeService;

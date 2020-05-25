import { Component, OnInit, Input,EventEmitter, Output } from '@angular/core';
import { DataserviceService } from '../dataservice.service'
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Data } from '@angular/router';

@Component({
  selector: 'ngbd-modal-content',
  template: `
    <div class="modal-header">
      <h6 class="modal-title">Add New Record</h6>
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
    <div>
    <div class="input-group mb-3">
    <input #distance type="text" class="form-control" placeholder="Distance travelled" aria-label="Distance travelled" aria-describedby="basic-addon1">
    <div class="input-group-append">
      <span class="input-group-text" id="basic-addon1">meters</span>
    </div>
    </div>
    <div class="input-group mb-3">
  <input #duration type="text" class="form-control" placeholder="Duration" aria-label="Duration of travel" aria-describedby="basic-addon2">
  <div class="input-group-append">
    <span class="input-group-text" id="basic-addon2">seconds</span>
  </div>
</div>
  </div>
    </div>
    <div class="modal-footer">
      <button class="btn btn-outline-success btn-sm" (click)="save(duration.value,distance.value)">Save</button>
      <button type="button" class="btn btn-outline-secondary btn-sm" (click)="activeModal.close('Close click')">Close</button>
    </div>
  `
})
export class NgbdModalContent {
  data = [];
  @Output() saveData = new EventEmitter();
  save(duration, distance){
    this.data.push({"distance": distance, "duration": duration, "timestamp": new Date()});
    localStorage.setItem("distance",distance);
    localStorage.setItem("duration",duration);
    this.activeModal.close('success');
  }
  constructor(public activeModal: NgbActiveModal) {}
}

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  constructor(private modalService: NgbModal, private sdata: DataserviceService) { }

  ngOnInit(): void {
  }
  open(){
    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.result.then((result)=>{
      if(result==='success'){
        this.sdata.updateData({"distance":localStorage.getItem("distance"),"duration":localStorage.getItem("duration"),"timestamp":(new Date().toLocaleDateString()+" at "+new Date().toLocaleTimeString())});
      }
    });
  }
}

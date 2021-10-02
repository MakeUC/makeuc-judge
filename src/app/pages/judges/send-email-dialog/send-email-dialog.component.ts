import { Component, Inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Judge } from 'src/app/interfaces/judge';
import { AdminService } from 'src/app/services/admin.service';
import { SendEmailDto } from '../../../interfaces/email';

@Component({
  selector: 'send-email-dialog',
  templateUrl: './send-email-dialog.component.html',
  styleUrls: ['./send-email-dialog.component.css'],
})
export class SendEmailDialogComponent {
  state: 'READY' | 'PENDING' | 'DONE' = `READY`;

  constructor(
    @Inject(MAT_DIALOG_DATA) public judge: Judge,
    public ref: MatDialogRef<SendEmailDialogComponent>,
    private service: AdminService,
  ) {}

  sendEmail() {
    this.state = `PENDING`;

    this.service.sendEmail(this.judge.id).subscribe(() => {
      this.state = `DONE`;
    });
  }

  closeDialog() {
    this.ref.close();
  }
}

import { Component, ElementRef, Input, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';

import { ModalService } from './modal.service';

@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.less']
})

export class ModalComponent implements OnInit, OnDestroy {
    @Input() id: string;
    @Output() modalClose = new EventEmitter<any>();
    private element: any;

    constructor(private modalService: ModalService, private el: ElementRef) {
        this.element = el.nativeElement;
        this.element.style.display = 'none';
    }

    ngOnInit(): void {
        const modal = this;

        if (!this.id) {
            console.error('modal must have an id');
            return;
        }

        document.body.appendChild(this.element);

        this.element.addEventListener('click', function (e: any) {
            if (e.target.className === 'app-modal') {
                modal.close();
            }
        });

        this.modalService.add(this);
    }

    // remove self from modal service when directive is destroyed
    ngOnDestroy(): void {
        this.modalService.remove(this.id);
        this.element.remove();
    }

    // open modal
    open(): void {
        this.element.style.display = 'block';
        document.body.classList.add('app-modal-open');
    }

    // close modal
    close(): void {
        this.element.style.display = 'none';
        document.body.classList.remove('app-modal-open');
        this.modalClose.emit({});
    }
}

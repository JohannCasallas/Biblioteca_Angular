import { Component, OnInit } from '@angular/core';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';

interface FoodNode {
  name: string;
  children?: FoodNode[];
}

interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}

const TREE_DATA: FoodNode[] = [
  {
    name: 'Prestamos',
    children: [{ name: 'Registrar' }, { name: 'Consultar' }],
  },
  {
    name: 'Registro',
    children: [{ name: 'Libros' }, { name: 'Autores' }, { name: 'Editorial' }, { name: 'Categoria' }],
  },
  {
    name: 'Persona',
    children: [{ name: 'Usuario' }, { name: 'Lectores' }],
  },
];


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  private _transformer = (node: FoodNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  };

  treeControl = new FlatTreeControl<ExampleFlatNode>(
    node => node.level,
    node => node.expandable,
  );
  treeFlattener = new MatTreeFlattener(
    this._transformer,
    node => node.level,
    node => node.expandable,
    node => node.children,
  );

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor() {
    this.dataSource.data = TREE_DATA;
  }

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;

  toggleNode(node: ExampleFlatNode): void {
    this.treeControl.dataNodes.forEach((n) => {
      if (n !== node) {
        this.treeControl.collapse(n);
      }
    });
    this.treeControl.toggle(node);
  }

}

import { firstWordUpperCase, toHump, objDeepCopy } from './tools';
import { appendInterfaceTofile } from './appendFile';
import { createInterfaceBody } from './createBody';
import ExportInterfaceAst from '../ast/TSExample/interfaceAst';

/** 
 * 当父节点不为data && 其类型为array或者object时需要创建一个interface
 * 当需要创建的时候可以把其他父节点为其值的创建body
 */
export const createChildrenInterface = (childrenBody, parentName, finalName, prefixName) => {
  prefixName = prefixName + toHump(firstWordUpperCase(parentName), '.');
  const ast = objDeepCopy(ExportInterfaceAst) as any;
  appendInterfaceTofile(parentName, createInterfaceBody(childrenBody, parentName, prefixName), ast, finalName);
}
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    if(!head) return null;
    if(!head.next) return head;
    
    let p = head;
    let c = head.next;
    let t = new ListNode(-1, p);
    head = t;
    
    while(c !== null) {
        if(p.val === c.val) {
            
            while(p.val === c.val) {
                c = c.next;
                p = p.next
                
                if(!c) {
                    t.next = c;
                    return head.next
                }
            }
            
            p.next = null;
            p = c;
            c = c.next;
            t.next = p;
        } else {
            t = p;
            p = c;
            c = c.next;
        }  
    }
    return head.next;
};